import Link from "next/link"
import exp from "@/_data/exp"

export default async function ExpData() {
    return (
        <>
        {exp.map((ex)=>(
            <div className="card my-5">
                <Link href={ex.href}>{ex.name}</Link>
                {ex.years}
                {ex.position}
                {ex.type}
                {ex.place}
                {ex.desc}
            </div>
        ))}
        </>
    )
}