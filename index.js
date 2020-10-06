function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    let discoveredOrder = []
    stack.push(rootNode)
    discoveredOrder.push(rootNode)

    while(stack.length > 0){
        let currentNode = stack.pop()
        if(!currentNode.discovered){
            let adjacentNodes = getAdjacentNodes(currentNode, vertices, edges)
            currentNode.discovered = true
            adjacentNodes.forEach(node => {
                stack.push(node)
                discoveredOrder.push(node)
            })
        }
    }
    return discoveredOrder
}

function getAdjacentNodes(node, vertices, edges){
    let adjacentNodes = edges.filter(edge => edge.includes(node.name))
    .map(edge => { return edge[1] === node.name ? edge[0] : edge[1]})
    .map(name => { return vertices.find(vertex => vertex.name === name)})
    .filter(vertex => !vertex.discovered)
    return adjacentNodes
}
