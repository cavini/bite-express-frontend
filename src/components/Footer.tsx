const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">BiteExpress</span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </span>
      </div>
    </div>
  )
}

export default Footer