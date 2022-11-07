import "../css/footer.css";


function Footer(props) {
    return (
        <div className={`footer ${props.modeClass}backgroundModefooter`}>
            <div className="container my-5">

                <footer className=" text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a
                                class="btn btn-primary btn-floating m-1"
                                href="https://www.facebook.com/oriya.hajbi/"
                                role="button"
                            ><i className="fa fa-facebook"></i></a>
                            <a
                                class="btn btn-danger btn-floating m-1"
                                href="https://www.instagram.com/oriya_hajbi/"
                                role="button"
                            ><i className="fa fa-instagram"></i></a>

                            <a
                                class="btn btn-info btn-floating m-1"
                                href="https://www.linkedin.com/in/oriya-hajbi/"
                                role="button"
                            ><i className="fa fa-linkedin"></i></a>
                            <a
                                class="btn btn-dark btn-floating m-1"
                                href="https://github.com/OriyaHajbi"
                                role="button"
                            ><i className="fa fa-github"></i></a>
                        </section>
                    </div>

                    <div className={`text-center p-3 ${props.modeClass}footer`}>
                        © {new Date().getFullYear()} Copyright: Oriya Hajbi
                    </div>
                </footer>
            </div >
        </div >


    );
}

export default Footer;




