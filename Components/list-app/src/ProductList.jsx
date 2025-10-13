function ProductList(props){
    const allProducts = props.data.map((p)=> {
        return (
            <li>
                {p.name} : ${p.price}
            </li>
        ); 
    });

    return <ol>{allProducts}</ol>
};

export default ProductList;