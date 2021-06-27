const Logo = ({ title, url, className }) => {
    return(
        <a href={url} className={className}>
            {title}
        </a>
    );
};

export default Logo;