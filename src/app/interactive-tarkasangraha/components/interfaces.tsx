export interface GenericComponentProps {
    onShapeClick: (nextComponent: string) => void;
}

export type DataNode = {
  name: string
  navigateTo?: string
  children?: DataNode[]
}

export type SunChartProps = {
  data: DataNode
  onShapeClick: (nextComponent: string) => void
  width?: number
  height?: number
  colorPalettes?: { [depth: number]: string[] }
}

export interface SectionedContentProps {
    sections: {
        title?: string;
        content: React.ReactNode;
        icon?: React.ReactNode;
    }[]
}

export interface RowDivisionProps {
    sections: {
        icon?: React.ReactNode;
        title: string;
        content: string;
    }[]
}