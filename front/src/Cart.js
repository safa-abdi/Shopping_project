import GOT from './images/gameofthrones.jpg';
import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer

import LOR from './images/lordrings.jpg' ;

import './Cart.css';
function Cart() {
    return (
        <div className="checkout-container">
            <Header></Header>
            <section class="page-header">
            <div class="overly"></div> 	
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <div class="content text-center">
                    <h1 class="mb-3 whitetext" >Cart</h1>
                    <h5 class=" whitetext1 ">Here is your Cart.Checkout prices before you proceed to pay !</h5>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent justify-content-center">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Cart">Cart</a></li>
                    </ol>
                </nav>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        
        
            <section class="cart shopping page-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="product-list">
                        <form class="cart-form">
                            <table class="table shop_table shop_table_responsive cart" cellspacing="0">
                                <thead>
                                <tr>
                                    <th class="product-thumbnail"> </th>
                                    <th class="product-name">Cart Book</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                    <th class="product-remove"> </th>
                                    
                                 
                                </tr>
                                </thead>
        
                                <tbody>
                                <tr class="cart_item">
                                    <td class="product-thumbnail" data-title="Thumbnail">
                                        <a href="/product-single"><img src={GOT} class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /></a>
                                    </td>
        
                                    <td class="product-name" data-title="Product">
                                        <a href="#">Game of Thrones</a>
                                    </td>
        
                                    <td class="product-price" data-title="Price">
                                        <span class="amount"><span class="currencySymbol"><pre wp-pre-tag-3=""></pre>
        </span>30.00</span>
                                    </td>
                                    <td class="product-quantity" data-title="Quantity">
                                        <div class="quantity">
                                            <label class="sr-only" >Quantity</label>
                                            <input type="number" id="qty" class="input-text qty text" step="1" min="0" max="9" title="Qty" size="4" value={1}  />
                                        </div>
                                    </td>
                                    <td class="product-subtotal" data-title="Total">
                                        <span class="amount">
                                            <span class="currencySymbol">
        <pre wp-pre-tag-3=""></pre>
                                            </span>30.00</span>
                                    </td>
                                    <td class="product-remove" data-title="Remove">
                                        <a href="#" class="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</a>
                                    </td>
                                   

                                </tr> 

                                <tr class="cart_item">
                                    <td class="product-thumbnail" data-title="Thumbnail">
                                        <a href="/product-single"><img src={LOR} class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /></a>
                                    </td>
                                    <td class="product-name" data-title="Product">
                                        <a href="#">
Lord Of The Rings</a>
                                    </td>
                                    <td class="product-price" data-title="Price">
                                        <span class="amount"><span class="currencySymbol">
        <pre wp-pre-tag-3=""></pre>
                                        </span>25.00</span>
                                    </td>
                                    <td class="product-quantity" data-title="Quantity">
                                        <div class="quantity">
                                            <label class="sr-only" >Quantity</label>
                                            <input type="number" id="quantity_5cc58182489a8" class="input-text qty text" step="1" min="0" max="9" name="#" title="Qty" size="4" value={1} />
                                        </div>
                                    </td>
                                    <td class="product-subtotal" data-title="Total">
                                        <span class="amount">
                                            <span class="currencySymbol">
        <pre wp-pre-tag-3=""></pre>
                                            </span>25.00</span>
                                    </td>
                                    <td class="product-remove" data-title="Remove">
                                        <a href="#" class="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</a>
                                    </td>
                                    
                           
                                </tr>
                                <tr>
                                    <td colspan="6" class="actions">
                                       
                                        <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="27da9ce3e8" />
                                        <input type="hidden" name="_wp_http_referer" value="/cart/" />
                                        </td>
                                </tr> 

                                </tbody>

                               
                            </table>
                        </form>
                    </div>
                </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                    <div class="cart-info card p-4 mt-4">
                        <h4 class="mb-4">Cart totals</h4>
                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between pb-2 mb-3">
                            <h5>Subtotal</h5>
                            <span>$55.00</span>
                            </li>
                            <li class="d-flex justify-content-between pb-2 mb-3">
                            <h5>Shipping</h5>
                            <span>Free</span>
                            </li>
                            <li class="d-flex justify-content-between pb-2">
                            <h5>Total</h5>
                            <span>$55.00</span>
                            </li>
                        </ul>
                      
                       <br></br><a href="/checkout" class="btn btn-main">Proceed to checkout</a>
                       
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
export default Cart