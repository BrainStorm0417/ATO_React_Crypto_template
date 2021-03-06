import React, { Component } from "react";



class Service extends Component{
    render(){
        let data = [
            {
                icon: 'zmdi zmdi-settings',
                title: 'Easy To Customize',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },

            {
                icon: 'zmdi zmdi-favorite',
                title: 'User Friendly',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },

            {
                icon: 'zmdi zmdi-time',
                title: '24/7 Support',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            }
        ];
        let DataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 service-column" key={i}>
                    <div className="single-service text-center">
                        <div className="service-icon">
                            <i className={`${val.icon}`}></i>
                        </div>
                        <h4 className="title">{val.title}</h4>
                        <p className="desc">{val.desc}</p>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/* Start Service Area */}
                <div className={`service-area ${this.props.horizontal}`}>
                    <div className="container">
                        <div className="row">
                            {DataList}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}
            </div>
        )
    }
}

export default Service;

