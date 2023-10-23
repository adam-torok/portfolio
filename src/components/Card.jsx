export default function Card() {
    return (
        <div className="bg-white border flex flex-col p-8">
            <img className="bordered mb-5" src="https://plus.unsplash.com/premium_photo-1669653214121-60a9e4107271?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex-grow">
                <h2 className="text-xl title-font font-medium mb-3">Webdesign</h2>
                <p className="leading-relaxed text-sm text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae.
                </p>
            </div>
        </div>
    )
}