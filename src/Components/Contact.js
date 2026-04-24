const Contact = () => {
    return (
        <div>
            <h1 className="p-4 m-4 font-bold text-3xl"> Contact Us Page</h1>
            <form className="p-4 m-4">
                <input className="p-2 m-2 border border-black" placeholder="Name" />
                <input className="p-2 m-2 border border-black" placeholder="Message" />
                <button className="p-2 m-2 border border-black rounded-2xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;