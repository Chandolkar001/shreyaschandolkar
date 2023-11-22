import about from "@/_data/about";

export default function Social() {
  return (
    <div>
    {about.links.map(item =>(
        <div>
            {item.name}
            {item.link}
        </div>
      ))}
    </div>
  )
}
