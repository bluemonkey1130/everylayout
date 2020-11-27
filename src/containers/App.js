import React, {Component} from 'react';


class App extends Component {
    state = {
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',

    }

    render() {
        return (
            <article className="grid-row">
                <section className="grid-layout standard has-one-column">
                    <div className="stack-small">
                        <h1>Heading One</h1>
                        <h2>Heading Two</h2>
                        <h3>Heading Three</h3>
                        <h4>Heading Four</h4>
                        <h5>Heading Five</h5>
                        <h6>Heading Six</h6>
                        <p>Nu pour pièce étranger. Devant peu dame droit annoncer te. Hiver retour fois désespoir.
                            Last body step leader million direction account week. Special yet too onto camera power
                            civil. Almost particular level throughout.</p>
                    </div>
                </section>
                <section className="grid-layout standard has-three-columns">
                    <div className="box invert">
                        <p>Box CSS class usage</p>
                    </div>
                    <div className="box">
                        <p>Box CSS class usage</p>
                    </div>
                    <div className="box invert">
                        <p>Box CSS class usage</p>
                    </div>
                </section>
                <section className="grid-layout standard">
                    <div className="stack center-l">
                        <h3>More such food reveal ok improve similar.</h3>
                        <p>Puis contre forme fait avancer absolu lumière. Semblable accent sourire agiter parti. Ci ouvrir savoir plonger santé caractère simple.</p>
                        <p>Ab modi rem consequatur delectus. Fugiat dicta id cumque aliquam nostrum facilis. Maiores repellendus ad eaque harum culpa suscipit.</p>
                        <p>Ab modi rem consequatur delectus. Fugiat dicta id cumque aliquam nostrum facilis. Maiores repellendus ad eaque harum culpa suscipit.</p>
                    </div>
                </section>

                <section className="grid-layout standard has-three-columns">
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                    <figure className="frame">
                        <img src={this.state.img} alt="Text"/>
                    </figure>
                </section>

            </article>
        );
    }
}

export default App;