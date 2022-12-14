import { FC, useCallback } from "react";
import ReactFlow, { Background, Connection, Controls, MiniMap, OnConnect, addEdge, useEdgesState, useNodesState } from "reactflow";

// 👇 you need to import the reactflow styles

const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } }
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

interface Props {
    height: string;
}

export const Flow: FC<Props> = ({ height }) => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect | undefined = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{ height }}>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};
