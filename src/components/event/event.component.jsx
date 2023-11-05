
const Event = (props) => {
  const {price, srcc} = props
  return (
    <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={srcc} alt="Poster of Quiz." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
        <p className="mt-1 text-lg font-medium text-gray-900">Prize Pool : {price}/-</p>
    </a>
)
}

export default Event