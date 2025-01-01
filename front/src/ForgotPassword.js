import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
function ForgotPassword() {
    return (
        <div className="forgot-password-container">
            <Header></Header>
             <div className="bg3">

            <div class="account section">
                <div class="container">
                <div class="d-flex flex-row-reverse">
                    <div class="col-lg-6">
                    <div class="login-form border p-5">
                        <div class="text-center heading">
                        <h3 class="mb-2 h2 whitetext">Password Recovery</h3>
                        <p class="lead whitetext1">Please enter email address for your account.verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
                        </div>
            
                        <form action="#">
                        <div class="form-group mb-4">
                            <label for="#">Enter Email Address</label>
                            <input type="text" class="form-control" placeholder="Enter Email Address" />
                        </div>
                        <a href="#" class="btn btn-main mt-3 btn-block">Request OTP</a>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
      
            </div> 
            <Footer></Footer> </div>
    )
}
export default ForgotPassword