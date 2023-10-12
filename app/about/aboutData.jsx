import about from "@/_data/about"

export default async function AboutData() {
    return (
        <>
        <div className="container">
            <div className="git-card">
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Chandolkar001&show_icons=true&locale=en&layout=compact&theme=github&hide=html,css,scss,jupyter%20notebook&langs_count=10"/>
                <img src="https://github-readme-stats.vercel.app/api?username=Chandolkar001&count_private=true"/>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=Chandolkar001&theme=github"/>
            </div>
            <div className="max-w-md mx-auto">
            <div className="card max-w-md">
                        {about.about}
                </div>
                <div className="card max-w-md">
                        {about.softdev}
                </div>
                <div className="card max-w-md">
                        {about.robodev}
                </div>
            </div>
        </div>

        </>
    )
}
