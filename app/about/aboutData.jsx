import about from "@/_data/about"

export default async function AboutData() {
    return (
        <>
        <div className="container">
            <div className="git-card">
                <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${about.github.username}&show_icons=true&locale=en&layout=compact&theme=${about.github.theme}&hide=html,css,scss,jupyter%20notebook&langs_count=10`}/>
                <img src={`https://github-readme-stats.vercel.app/api?username=${about.github.username}&count_private=true&theme=${about.github.theme}`}/>
                <img src={`https://github-readme-streak-stats.herokuapp.com?user=${about.github.username}&theme=${about.github.theme}`}/>
            </div>
            <div className="max-w-md mx-auto">
            <div className="card max-w-md">
                        {about.about}
                </div>
            </div>
        </div>

        </>
    )
}
