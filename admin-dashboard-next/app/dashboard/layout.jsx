import Sidebar from '../ui/dashboard/sildebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

export default function layout({children}) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
