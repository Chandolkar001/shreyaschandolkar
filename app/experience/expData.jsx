import Link from "next/link"
import exp from "@/_data/exp"

export default async function ExpData() {
    return (
        <>
        {exp.map((ex)=>(
            <div className="card my-5">
                <div className="job-info">
                <div className="job-title">{ex.position}</div>
                <div className="company-name"><Link href={ex.href}>{ex.name}</Link></div>
                <div className="job-years">{ex.years}</div>
                <div className="job-place">{ex.place}</div>
                <ul className="job-description">
                {ex.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
                </div>
                </div>
        ))}
        </>
    )
}