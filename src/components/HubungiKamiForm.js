import React from "react";

class HubungiKamiForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isSubmitted:false,
            hasEmailError: false,
            hasPesanError: false
        };
    }
    handleEmailChange(event){
        const alamatEmail = event.target.value;
        const isEmpty = alamatEmail === '';
        this.setState({hasEmailError:isEmpty});
    }
    handlePesanChange(event){
        const pesan = event.target.value;
        const isEmpty = pesan === '';
        this.setState({hasPesanError:isEmpty});
    }
    handleSubmitted(){
        this.setState({isSubmitted:true})
    }
    render() {
        let emailErrorText='';
        if(this.state.hasEmailError){
            emailErrorText=(<p className="hubungikamiform-message-error">
                Masukan alamat email anda
            </p>);
        }
        let pesanErrorText='';
        if(this.state.hasPesanError){
            pesanErrorText=(<p className="hubungikamiform-message-error">
                Masukan pesan anda
            </p>);
        }
        let hubungiKamiForm='';
        if (this.state.isSubmitted) {
            hubungiKamiForm=(<div className="hubungiKamiForm-submit-message">
                Pesan Terkirim
            </div>
            );
        }
        else{
            hubungiKamiForm=(<form onSubmit={()=>{this.handleSubmitted()}}>
                <p>Alamat Email (Wajib diisi)</p>
                <input onChange={(event)=>{this.handleEmailChange(event)}}/>
                {emailErrorText}
                <p>Pesan (Wajib Diisi)</p>
                <textarea onChange={(event)=>{this.handlePesanChange(event)}}/>
                {pesanErrorText}
                <input type='submit' value='kirim'/>
            </form>);
        }
        return (
            <div className="hubungiKamiForm">
                {hubungiKamiForm}
            </div>
        );
    }
}

export default HubungiKamiForm;