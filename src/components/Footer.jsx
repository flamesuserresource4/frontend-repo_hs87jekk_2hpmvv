export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6 text-center text-blue-300/70 text-sm">
        <p>© {new Date().getFullYear()} BrightSmile Dental. All rights reserved.</p>
        <p className="mt-2">123 Main Street, Suite 200 • (555) 123-4567</p>
      </div>
    </footer>
  )
}
