const Menu = ({ list }) => {
    return(
        <>
            {
                list.map((item, index) => (
                    <a href={item.url} key={index} className="p-4">
                        {item.title}
                    </a>
                ))
            }
        </>
    );
};

export default Menu;