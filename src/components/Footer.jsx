import React from "react";


function Footer (){
    return(
        <>
        
        <div className="container-fluid px-4 bg-dark">
        <footer className="d-flex flex-wrap align-items-center py-3 border-top">
          <div className="col-md-6 d-flex align-items-center">
            <span className="text-muted ">&copy; 2023, All Rights Reserved</span>
          </div>
          <ul className="nav col-md-6 d-flex justify-content-end list-unstyled ms-auto">
            <li className="fs-4">
              <a
                className="text-muted"
                href="https://www.facebook.com/intechsolusions/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="https://api.whatsapp.com/send?phone=923342840591"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="https://twitter.com/intechsolusions"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
        
        
        
        </>
    )
}

export default Footer