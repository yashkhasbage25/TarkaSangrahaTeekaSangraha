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

  // Helper function to generate shades of a base color
  private generateColorShades(baseColor: string, count: number, lightnessRange: [number, number] = [0.3, 0.8]): string[] {
    const color = d3.color(baseColor)
    if (!color) return [baseColor]
    
    const hslColor = d3.hsl(color)
    const [minLightness, maxLightness] = lightnessRange
    
    if (count === 1) return [baseColor]
    
    const shades: string[] = []
    for (let i = 0; i < count; i++) {
      // Interpolate lightness from darker to lighter (parent color to light)
      const t = count === 1 ? 0 : i / (count - 1)
      const lightness = minLightness + t * (maxLightness - minLightness)
      
      const newColor = d3.hsl(hslColor.h, hslColor.s, Math.min(lightness, 0.9))
      shades.push(newColor.toString())
    }
    
    return shades
  }

  // Recursive function to assign colors based on parent colors
  private assignNestedColors(node: d3.HierarchyNode<DataNode>, parentColor?: string): Map<d3.HierarchyNode<DataNode>, string> {
    const colorMap = new Map<d3.HierarchyNode<DataNode>, string>()
    
    if (node.depth === 0) {
      // Root node - no color needed
      if (node.children) {
        // First level gets base colors from palette
        const firstLevelPalette = this.props.colorPalettes?.[1] || d3.schemeCategory10
        
        node.children.forEach((child, index) => {
          const baseColor = firstLevelPalette[index % firstLevelPalette.length]
          colorMap.set(child, baseColor)
          
          // Recursively assign colors to children
          const childColors = this.assignNestedColors(child, baseColor)
          childColors.forEach((color, childNode) => {
            colorMap.set(childNode, color)
          })
        })
      }
    } else if (parentColor && node.children && node.children.length > 0) {
      // Generate shades of parent color for children
      const childCount = node.children.length
      const shades = this.generateColorShades(parentColor, childCount, [0.4, 0.85])
      
      node.children.forEach((child, index) => {
        const childColor = shades[index]
        colorMap.set(child, childColor)
        
        // Recursively assign colors to grandchildren
        const grandchildColors = this.assignNestedColors(child, childColor)
        grandchildColors.forEach((color, grandchildNode) => {
          colorMap.set(grandchildNode, color)
        })
      })
    } else if (parentColor) {
      // Leaf node - use parent color but slightly lighter
      const leafColor = this.generateColorShades(parentColor, 1, [0.5, 0.7])[0]
      colorMap.set(node, leafColor)
    }
    
    return colorMap
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

    // 4) Generate nested color mapping
    const colorMap = this.assignNestedColors(root)

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
      .style('font', '16px Martel')

    const g = svg.append('g')

    // 7) Draw slices and make them clickable  
    const slices = g
      .selectAll('path')
      .data(root.descendants().slice(1))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', d => colorMap.get(d) || '#cccccc')
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .style('cursor', d => (d.data.navigateTo ? 'pointer' : 'default'))
      .on('click', (_event, d) => {
        if (d.data.navigateTo) {
          onShapeClick(d.data.navigateTo)
        }
      })
      .on('mouseover', function(_event, d) {
        // Add hover effect
        d3.select(this)
          .attr('stroke-width', 2)
          .attr('stroke', '#333')
      })
      .on('mouseout', function() {
        // Remove hover effect
        d3.select(this)
          .attr('stroke-width', 1)
          .attr('stroke', 'white')
      })

    // optional tooltip  
    slices.append('title')
      .text(d => {
        const path = d.ancestors().reverse().map(n => n.data.name).join(' → ')
        const color = colorMap.get(d)
        return `${path}`
      })

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
      .attr('fill', d => {
        // Choose text color based on background lightness
        // const bgColor = colorMap.get(d)
        // if (bgColor) {
        //   const hsl = d3.hsl(bgColor)
        //   return hsl.l > 0.6 ? 'black' : 'white'
        // }
        return 'black'
      })
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      // .attr('font-size', d => {
      //   const arcLength = (d.x1 - d.x0) * d.y1 * radius
      //   const maxFontSize = Math.min(16, arcLength / d.data.name.length * 2)
      //   return `${Math.max(8, maxFontSize)}px`
      // })
      .attr('font-size', '16px')
      // .text(d => {
      //   const arcLength = (d.x1 - d.x0) * d.y1 * radius
      //   const maxChars = Math.floor(arcLength / 8)
      //   return d.data.name.length > maxChars 
      //     ? d.data.name.substring(0, maxChars - 1) + '…'
      //     : d.data.name
      // })
      .text(d => d.data.name)
      .on('click', (_event, d) => {
        if (d.data.navigateTo) {
          onShapeClick(d.data.navigateTo)
        }
      })
      .style('cursor', d => (d.data.navigateTo ? 'pointer' : 'default'))
      .style('pointer-events', 'none') // Prevent text from blocking mouse events on slices

      
    // 9) Center label  
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('font-size', '24px')
      .attr('fill', 'white')
      .style('font-weight', 'bold')
      .style('text-shadow', '1px 1px 2px rgba(0,0,0,0.7)')
      .text(data.name)
  }

  render() {
    return <div ref={this.containerRef} />
  }
}