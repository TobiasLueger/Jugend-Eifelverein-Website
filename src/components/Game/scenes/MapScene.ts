import * as Phaser from 'phaser';

interface MapNode {
  x: number
  y: number
  type: string
  connections: number[]
}

export class MapScene extends Phaser.Scene {
  private currentNode: number = 0
  private nodes: MapNode[] = []
  private player?: Phaser.GameObjects.Sprite

  constructor() {
    super({ key: 'MapScene' })
  }

  preload() {
    this.load.image('node', '../../../src/images/game/buch.png')
    this.load.image('player', '../../../src/images/game/ersteHilfeSet.png')
    this.load.image('tree', '../../../src/images/game/tree.png')
  }

  create() {
    // Generate the initial map
    this.generateRandomMap()
    this.createTrees()

    // Place the player at the start node
    this.player = this.add.sprite(
      this.nodes[0].x,
      this.nodes[0].y,
      'player'
    ).setScale(0.08)

    this.player.setDepth(10)

    this.renderNodes()
    this.drawConnections()
  }

  /**
   * Generates a random map layout with guaranteed paths to the boss.
   * Each node layer is connected forward, ensuring no dead ends.
   */
  private generateRandomMap() {
    this.nodes = []
    const startX = 400
    const startY = 600
    const bossX = 400
    const bossY = 200

    // Add start node
    this.nodes.push({ x: startX, y: startY, type: 'start', connections: [] })

    // Decide how many layers of nodes before reaching the boss
    const layers = Phaser.Math.Between(2, 3)
    let currentLayerIndices: number[] = [0] // Start node index
    let nextLayerIndices: number[] = []

    let currentY = startY
    const totalSteps = layers + 1
    const yStep = (startY - bossY) / totalSteps

    for (let i = 0; i < layers; i++) {
      currentY -= yStep
      // Random number of nodes in this layer
      const numNodes = Phaser.Math.Between(2, 4)
      nextLayerIndices = []

      // Create nodes for this layer
      const layerNodes: number[] = []
      for (let j = 0; j < numNodes; j++) {
        const x = startX + Phaser.Math.Between(-100, 100) * j
        const nodeType = this.getRandomNodeType()
        const newNodeIndex = this.nodes.length
        this.nodes.push({ x, y: currentY, type: nodeType, connections: [] })
        layerNodes.push(newNodeIndex)
      }

      // Ensure no dead ends:
      // 1. Connect each old node to at least one new node.
      for (let k = 0; k < currentLayerIndices.length; k++) {
        const oldNodeIndex = currentLayerIndices[k]
        const targetNodeIndex = Phaser.Utils.Array.GetRandom(layerNodes)
        this.nodes[oldNodeIndex].connections.push(targetNodeIndex)
      }

      // 2. Optionally add extra random connections for variety.
      const extraConnections = Phaser.Math.Between(0, numNodes)
      for (let e = 0; e < extraConnections; e++) {
        const oldNodeIndex = Phaser.Utils.Array.GetRandom(currentLayerIndices)
        const targetNodeIndex = Phaser.Utils.Array.GetRandom(layerNodes)
        if (!this.nodes[oldNodeIndex].connections.includes(targetNodeIndex)) {
          this.nodes[oldNodeIndex].connections.push(targetNodeIndex)
        }
      }

      nextLayerIndices = layerNodes
      currentLayerIndices = nextLayerIndices
    }

    // Add boss node and connect all last-layer nodes to it
    const bossIndex = this.nodes.length
    this.nodes.push({ x: bossX, y: bossY, type: 'boss', connections: [] })
    for (const idx of currentLayerIndices) {
      this.nodes[idx].connections.push(bossIndex)
    }
  }

  private getRandomNodeType(): string {
    const types = ['battle', 'event', 'merchant', 'test']
    return Phaser.Utils.Array.GetRandom(types)
  }

  private createTrees() {
    for (let i = 0; i < 200; i++) {
      const x = Phaser.Math.Between(50, 750)
      const y = Phaser.Math.Between(50, 550)
      if (this.isPositionNearEdge(x, y)) {
        const tree = this.add.sprite(x, y, 'tree')
        tree.setScale(0.1)
        tree.setAlpha(0.7)
      }
    }
  }

  private isPositionNearEdge(x: number, y: number): boolean {
    return x < 100 || x > 700 || y < 100 || y > 500
  }

  private drawConnections() {
    const graphics = this.add.graphics()
    graphics.clear()
    graphics.lineStyle(2, 0xffff00, 0.5)

    this.nodes.forEach((node, index) => {
      node.connections.forEach(connectionIndex => {
        const targetNode = this.nodes[connectionIndex]
        graphics.beginPath()
        graphics.moveTo(node.x, node.y)
        graphics.lineTo(targetNode.x, targetNode.y)
        graphics.strokePath()
      })
    })
  }

  private renderNodes() {
    // Clear old node sprites if regenerating
    this.children.list.forEach(child => {
      if (child instanceof Phaser.GameObjects.Sprite && child.texture.key === 'node') {
        child.destroy()
      }
    })

    this.nodes.forEach((node, index) => {
      const nodeSprite = this.add.sprite(node.x, node.y, 'node')
      nodeSprite.setScale(0.05)
      nodeSprite.setInteractive()
      nodeSprite.on('pointerdown', () => this.handleNodeClick(index))
    })
  }

  private handleNodeClick(nodeIndex: number) {
    const node = this.nodes[nodeIndex]
    if (this.nodes[this.currentNode].connections.includes(nodeIndex)) {
      if (this.player) {
        this.tweens.add({
          targets: this.player,
          x: node.x,
          y: node.y,
          duration: 500,
          ease: 'Power2'
        })
      }

      this.currentNode = nodeIndex
      this.handleNodeEvent(node.type)
    }
  }

  private handleNodeEvent(type: string) {
    switch (type) {
      case 'battle':
        console.log('Starting battle...')
        break
      case 'event':
        console.log('Triggering event...')
        break
      case 'merchant':
        console.log('Opening merchant...')
        break
      case 'boss':
        console.log('Starting boss battle...')
        this.onRouteComplete()
        break
      case 'test':
        console.log('Test Tile...')
        break
    }
  }

  private onRouteComplete() {
    console.log('Route complete! Generating new path...')
  
    // Reset current node to start
    this.currentNode = 0
    
    // Generate a new map
    this.generateRandomMap()
  
    // Redraw connections and nodes first
    this.drawConnections()
    this.renderNodes()
  }
}