import { ProductContainer } from '../../product/components/productContainer'
import { useState, useEffect } from 'react'
import { CartContainer } from '../../shopping-cart/components/cartContainer'
import { Link } from 'react-router-dom';
import '../style/store.css';
import { addCart, getCart } from '../../shopping-cart/dao/cartDao';
import { MembershipContainer } from '../../membership/components/membershipContainer';

export const Store = ({ page, notFound }) => {

    const [pageState, setPageState] = useState(page);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        addCart(product.id).then(res => {
            setCart(res);
        })
    }

    useEffect(() => {
        getCart().then(res => {
            setCart(res);
        })
    }, [])

    const handleCartIcon = () => {
        setPageState("cart");
    }

    const handleMembershipIcon = () => {
        setPageState("membership");
    }

    const handleHomeIcon = () => {
        setPageState("home");
    }

    const pageRenderSwitch = (pageState) => {
        switch (pageState) {
            case "cart":
                return <CartContainer cart={cart} />
            case "membership":
                return <MembershipContainer></MembershipContainer>
            default:
                return <ProductContainer storeAddCart={handleAddToCart} />
        }


    }

    return (
        <>
            <div title="Store">
                {/* Question 1. change the shop name */}
                <div className="text-center mt-4">
                    <h1 className="display-3">
                        IBM Shop
                    </h1>
                    <p className="mt-3">This is a online shopping website.</p>
                </div>
                <header className="header">
                    <Link className="header-child" to="/" onClick={handleHomeIcon}>Home</Link>
                    <Link className="header-child" to="/membership" onClick={handleMembershipIcon}>Membership</Link>
                    <Link className="header-child">Sales</Link>
                    <Link className="header-child">Contact Us</Link>
                    <Link className="header-child" to="/cart" onClick={handleCartIcon}><img className="header-icon" src="/cart.png" /> Cart ({cart ? cart.length : 0})</Link>
                </header>
            </div>
            <div>
                {
                    notFound ? <div className="mt-5 text-center">Seems you are lost, go back to <Link to="/">home</Link></div> :

                        (
                            pageRenderSwitch(pageState)
                        )
                }



            </div>
        </>
    )
}
