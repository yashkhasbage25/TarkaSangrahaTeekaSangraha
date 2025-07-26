// SunChart.tsx  
import React from 'react'
import * as d3 from 'd3'
import { SunChartProps, DataNode } from './interfaces'

export default class SunChart extends React.Component<SunChartProps> {
  private containerRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    this.drawChart()
  }

  componentDidUpdate(prev: SunChartProps) {
    if (
      prev.data !== this.props.data ||
      prev.width !== this.props.width ||
      prev.height !== this.props.height ||
      prev.colorPalettes !== this.props.colorPalettes
    ) {
      this.drawChart()
    }
  }

  componentWillUnmount() {
    d3.select(this.containerRef.current).selectAll('*').remove()
  }

  private drawChart() {
    const { data, width = 800, height = 800, colorPalettes, onShapeClick } = this.props

    // 1) Clear existing  
    const container = d3.select(this.containerRef.current!)
    container.selectAll('*').remove()

    // 2) Dimensions & ring‐thickness  
    const radius = width / 2 / 4  // four rings total  

    // 3) Hierarchy & partition  
    const root = d3
      .hierarchy<DataNode>(data)
      .sum(d => (d.children ? 0 : 1))
      .sort((a, b) => b.value! - a.value!)
    d3.partition<DataNode>().size([2 * Math.PI, root.height + 1])(root)

    // 4) Names by depth & color scales  
    const namesByDepth: { [d: number]: string[] } = {}
    root.descendants().forEach(node => {
      if (node.depth === 0) return
      namesByDepth[node.depth] = namesByDepth[node.depth] || []
      namesByDepth[node.depth].push(node.data.name)
    })

    const scales: { [d: number]: d3.ScaleOrdinal<string, string> } = {}
    for (const [depthStr, names] of Object.entries(namesByDepth)) {
      const depth = +depthStr
      const palette =
        colorPalettes?.[depth] ||
        (depth === 1
          ? d3.schemeCategory10
          : depth === 2
            ? (d3.schemeSet3 as string[])
            : d3.quantize(d3.interpolateRainbow, names.length))
      scales[depth] = d3.scaleOrdinal<string>().domain(names).range(palette)
    }

    // 5) Arc generator  
    const arc = d3
      .arc<d3.HierarchyRectangularNode<DataNode>>()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0 * radius)
      .outerRadius(d => d.y1 * radius)

    // 6) SVG container  
    const svg = container
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height] as any)
      .style('font', '12px sans-serif')

    const g = svg.append('g')

    // 7) Draw slices and make them clickable  
    const slices = g
      .selectAll('path')
      .data(root.descendants().slice(1))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', d => scales[d.depth](d.data.name))
      .style('cursor', d => (d.data.navigateTo ? 'pointer' : 'default'))
      .on('click', (_event, d) => {
        if (d.data.navigateTo) {
          onShapeClick(d.data.navigateTo)
        }
      })

    // optional tooltip  
    slices.append('title')
      .text(d => d.ancestors().reverse().map(n => n.data.name).join(' → '))

    // 8) Slanted labels at centroids  
    g.selectAll('text')
      .data(root.descendants().slice(1))
      .enter()
      .append('text')
      .attr('transform', d => {
        const [x, y] = (arc.centroid as any)(d)
        let angle = (Math.atan2(-y, -x) * 180) / Math.PI
        if (angle > 90) angle -= 180
        if (angle < -90) angle += 180
        return `translate(${x},${y}) rotate(${angle})`
      })
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text(d => d.data.name)

    // 9) Center label  
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('font-size', '18px')
      .attr('fill', 'white')
      .text(data.name)
  }

  render() {
    return <div ref={this.containerRef} />
  }
}  