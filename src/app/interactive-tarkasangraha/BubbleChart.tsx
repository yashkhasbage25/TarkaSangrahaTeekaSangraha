'use client';

import React, { Component } from 'react';  
import ReactFlow, { MiniMap, Controls, Background, Node, Edge } from 'react-flow-renderer';  
import './BubbleChart.css';  
  
interface BubbleData {  
  name: string;  
  children?: BubbleData[];  
  details?: string;  
}  
  
const initialData: BubbleData = {  
  name: "Tarkasangraha",  
  details: "Details about Tarkasangraha",  
  children: [  
    {  
      name: "Introductory Verse",  
      details: "Details about Introductory Verse"  
    },  
    {  
      name: "Padarthas",  
      details: "Details about Padarthas",  
      children: [  
        {  
          name: "Dravya",  
          details: "Details about Dravya",  
          children: [  
            { name: "Earth", details: "Details about Earth" },  
            { name: "Water", details: "Details about Water" },  
            { name: "Fire", details: "Details about Fire" },  
            { name: "Air", details: "Details about Air" },  
            { name: "Ether", details: "Details about Ether" },  
            { name: "Time", details: "Details about Time" },  
            { name: "Direction", details: "Details about Direction" },  
            { name: "Soul", details: "Details about Soul" },  
            { name: "Mind", details: "Details about Mind" }  
          ]  
        },  
        {  
          name: "Guna",  
          details: "Details about Guna",  
          children: [  
            { name: "Form", details: "Details about Form" },  
            { name: "Taste", details: "Details about Taste" },  
            { name: "Smell", details: "Details about Smell" },  
            { name: "Touch", details: "Details about Touch" },  
            { name: "Number", details: "Details about Number" },  
            { name: "Dimension", details: "Details about Dimension" },  
            { name: "Separateness", details: "Details about Separateness" },  
            { name: "Conjunction", details: "Details about Conjunction" },  
            { name: "Disjunction", details: "Details about Disjunction" },  
            { name: "Priority", details: "Details about Priority" },  
            { name: "Posteriority", details: "Details about Posteriority" },  
            { name: "Heaviness", details: "Details about Heaviness" },  
            { name: "Fluidity", details: "Details about Fluidity" },  
            { name: "Viscosity", details: "Details about Viscosity" },  
            { name: "Sound", details: "Details about Sound" },  
            { name: "Cognition", details: "Details about Cognition" },  
            { name: "Happiness", details: "Details about Happiness" },  
            { name: "Sorrow", details: "Details about Sorrow" },  
            { name: "Desire", details: "Details about Desire" },  
            { name: "Aversion", details: "Details about Aversion" },  
            { name: "Effort", details: "Details about Effort" },  
            { name: "Merit", details: "Details about Merit" },  
            { name: "Demerit", details: "Details about Demerit" },  
            { name: "Impressions", details: "Details about Impressions" }  
          ]  
        },  
        {  
          name: "Karma",  
          details: "Details about Karma",  
          children: [  
            { name: "Uplifting", details: "Details about Uplifting" },  
            { name: "Throwing down", details: "Details about Throwing down" },  
            { name: "Contracting", details: "Details about Contracting" },  
            { name: "Expanding", details: "Details about Expanding" },  
            { name: "Moving", details: "Details about Moving" }  
          ]  
        },  
        {  
          name: "Samanya",  
          details: "Details about Samanya",  
          children: [  
            { name: "Universal", details: "Details about Universal" },  
            { name: "Particular", details: "Details about Particular" }  
          ]  
        },  
        {  
          name: "Visesha",  
          details: "Details about Visesha",  
          children: [  
            { name: "Infinite particularities", details: "Details about Infinite particularities" }  
          ]  
        },  
        {  
          name: "Samavaya",  
          details: "Details about Samavaya",  
          children: [  
            { name: "Single inherence", details: "Details about Single inherence" }  
          ]  
        },  
        {  
          name: "Abhava",  
          details: "Details about Abhava",  
          children: [  
            { name: "Prior non-existence", details: "Details about Prior non-existence" },  
            { name: "Destruction", details: "Details about Destruction" },  
            { name: "Absolute non-existence", details: "Details about Absolute non-existence" },  
            { name: "Mutual non-existence", details: "Details about Mutual non-existence" }  
          ]  
        }  
      ]  
    },
  ]  
};  
  
interface BubbleChartState {  
  nodes: Node[];  
  edges: Edge[];  
  selectedNodeDetails: string | null;  
}  
  
class BubbleChart extends Component<{}, BubbleChartState> {  
  constructor(props: {}) {  
    super(props);  
  
    const nodes = this.generateNodes([initialData], '1', 0, 0);  
    const edges = this.generateEdges([initialData], '1');  
  
    this.state = {  
      nodes,  
      edges,  
      selectedNodeDetails: null  
    };  
  }  
  
  generateNodes = (bubbles: BubbleData[], parentId: string, depth: number, offsetX: number): Node[] => {  
    return bubbles.flatMap((bubble, index) => {  
      const id = `${parentId}-${index}`;  
      const position = { x: offsetX + index * 200, y: depth * 100 };  
      const node = {  
        id,  
        type: 'default',  
        data: { label: bubble.name, bubble },  
        position  
      };  
  
      return [node];  
    });  
  };  
  
  generateEdges = (bubbles: BubbleData[], parentId: string): Edge[] => {  
    return bubbles.flatMap((bubble, index) => {  
      const id = `${parentId}-${index}`;  
      const edges = bubble.children ? bubble.children.map((_, childIndex) => ({  
        id: `${id}-${childIndex}-edge`,  
        source: id,  
        target: `${id}-${childIndex}`  
      })) : [];  
      return edges;  
    });  
  };  
  
  handleNodeClick = (event: React.MouseEvent, node: Node) => {  
    const bubble = node.data.bubble as BubbleData;  
    if (bubble.children) {  
      const parentId = node.id;  
      const depth = parseInt(node.position.y.toString()) / 100 + 1;  
      const offsetX = node.position.x - (bubble.children.length - 1) * 100;  
  
      const newNodes = this.generateNodes(bubble.children, parentId, depth, offsetX);  
      const newEdges = this.generateEdges(bubble.children, parentId);  
  
      this.setState((prevState) => ({  
        nodes: [...prevState.nodes, ...newNodes],  
        edges: [...prevState.edges, ...newEdges]  
      }));  
    }  
  };  
  
  handleInfoClick = (event: React.MouseEvent, node: Node) => {  
    event.stopPropagation();  
    const bubble = node.data.bubble as BubbleData;  
    this.setState({ selectedNodeDetails: bubble.details || 'No details available' });  
  };  
  
  renderNode = (node: Node) => {  
    return (  
      <div style={{ position: 'relative' }}>  
        {node.data.label}  
        <span  
          className="node-info-icon"  
          onClick={(event) => this.handleInfoClick(event, node)}  
        >  
          ℹ️  
        </span>  
      </div>  
    );  
  };  
  
  render() {  
    const { nodes, edges, selectedNodeDetails } = this.state;  
  
    return (  
      <div style={{ height: '100vh', position: 'relative' }}>  
        <ReactFlow  
          nodes={nodes.map((node) => ({  
            ...node,  
            data: { ...node.data, label: this.renderNode(node) }  
          }))}  
          edges={edges}  
          onNodeClick={this.handleNodeClick}  
          fitView  
        >  
          <MiniMap />  
          <Controls />  
          <Background />  
        </ReactFlow>  
          {selectedNodeDetails && (  
              <div className="details-pane text-black">  
                <h2>Node Details</h2>  
                <p>{selectedNodeDetails}</p>  
                <button className="bg-purple-200 border-2 border-purple-600 text-purple-600 rounded-full px-4 py-2" onClick={() => this.setState({ selectedNodeDetails: null })}>  
                    Close  
                </button> 
              </div>  
          )}  
      </div>  
    );  
  }  
}  
  
export default BubbleChart;  