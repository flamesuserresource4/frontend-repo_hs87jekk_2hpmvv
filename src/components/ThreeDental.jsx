import { useEffect, useRef } from 'react'

// Lightweight Three.js hero background with rotating tooth-like shape
// Avoid external deps beyond three (already typical in template). If not installed, we keep it defensive.
export default function ThreeDental() {
  const mountRef = useRef(null)
  const cleanupRef = useRef(() => {})

  useEffect(() => {
    let cleanup = () => {}

    async function init() {
      try {
        const THREE = await import('three')
        const { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, Mesh, MeshStandardMaterial, IcosahedronGeometry, Color, FogExp2 } = THREE

        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight

        const scene = new Scene()
        scene.background = null
        scene.fog = new FogExp2(new Color('#0b1220'), 0.08)

        const camera = new PerspectiveCamera(45, width / height, 0.1, 100)
        camera.position.set(0, 0, 6)

        const renderer = new WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current.appendChild(renderer.domElement)

        const geo = new IcosahedronGeometry(1.6, 2)
        const mat = new MeshStandardMaterial({ color: '#7aa2ff', metalness: 0.4, roughness: 0.25, transparent: true, opacity: 0.9 })
        const mesh = new Mesh(geo, mat)
        mesh.scale.set(1.4, 1.6, 1.4)
        scene.add(mesh)

        const light = new AmbientLight(0xffffff, 0.6)
        scene.add(light)
        const dir = new DirectionalLight(0x99bbff, 1.2)
        dir.position.set(2, 3, 4)
        scene.add(dir)

        let raf
        const animate = () => {
          mesh.rotation.y += 0.004
          mesh.rotation.x += 0.002
          renderer.render(scene, camera)
          raf = requestAnimationFrame(animate)
        }
        animate()

        const onResize = () => {
          if (!mountRef.current) return
          const w = mountRef.current.clientWidth
          const h = mountRef.current.clientHeight
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
        }
        window.addEventListener('resize', onResize)

        cleanup = () => {
          cancelAnimationFrame(raf)
          window.removeEventListener('resize', onResize)
          renderer.dispose()
          geo.dispose()
          mat.dispose()
          mountRef.current && mountRef.current.removeChild(renderer.domElement)
        }
      } catch (e) {
        // If three is unavailable, fail silently
        cleanup = () => {}
      }
    }

    init()
    cleanupRef.current = cleanup
    return () => cleanupRef.current()
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent" />
    </div>
  )
}
