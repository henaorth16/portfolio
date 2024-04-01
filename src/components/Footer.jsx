const Footer = () => {
  return (
    <div className="text-3xl text-white mx-4 md:mx-32 items-center justify-center flex flex-1">
        <div className="flex flex-col md:flex-row p-4 md:p-28 w-full h-auto md:h-44 rounded-xl border-2 md:mt-44 justify-center"> {/* Added md:flex-col, p-4, md:p-28, md:h-auto, and md:mt-44 */}
        <ul className="flex items-center justify-center flex-wrap"> {/* Added flex-wrap */}
            <li className="m-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}> {/* Decreased width and height */}
    <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>linkedin</a></li>
            <li className="m-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}> {/* Decreased width and height */}
    <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>facebook</a></li>
            <li className="m-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}> {/* Decreased width and height */}
    <path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>telegram</a></li>
            <li className="m-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}> {/* Decreased width and height */}
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>mail</a></li>
            <li className="m-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}> {/* Decreased width and height */}
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>instagram</a></li>
        </ul>
        </div>
        </div>
  )
}

export default Footer
