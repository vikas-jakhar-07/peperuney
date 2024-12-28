const Heading = ({ text, className, }) => {
    return (
        <h2 className={`font-normal main-heading font-luckiest [text-shadow:_4px_4px_0_black] text-custom-5xl leading-custom-6xl text-white xl:text-custom-8xl xl:leading-custom-8xl ${className}`}>{text}</h2>
    )
}

export default Heading

