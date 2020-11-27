import React, {Component} from 'react';


class App extends Component {
    state = {
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',

    }

    render() {
        return (
            <article className="grid-row">
                <section className="grid-layout standard has-one-column">
                    <div className="stack pad-top-500 pad-bottom-500 center-l align-center">
                        <figure className="frame">
                            <img src={this.state.img} alt="Text"/>
                        </figure>
                        <div>
                            <h2>More such food reveal ok improve similar.</h2>
                            <p>Puis contre forme fait avancer absolu lumière. Semblable accent sourire agiter parti. Ci
                                ouvrir savoir plonger santé caractère simple. Totam voluptatem voluptates ducimus.
                                Debitis
                                et in ipsa. Officia ullam soluta architecto eveniet neque repellat.</p>
                            <a href="#" className="button call-to-action right">Read More</a>
                        </div>
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
                <section className="grid-layout standard has-two-columns">
                    <div className="stack stack-large">
                        <img src={this.state.img} alt="Text"/>
                    </div>
                    <form className="stack stack-large">
                        <div className="stack stack-small">
                            <h3>Dolor deserunt id.</h3>
                            <p>Relationship night by dog compare fight. Store our arm manage. Particular firm animal
                                stock color appear.</p>
                        </div>
                        <div className="stack stack-small">
                            <label>Name</label>
                            <input type="text"/>
                        </div>
                        <div className="stack stack-small">
                            <label>Email*</label>
                            <input type="email"/>
                            <p>*please enter a valid email address</p>
                        </div>
                        <div className="stack stack-small">
                            <input className="button right" type="submit" value="Submit"/>
                        </div>
                    </form>
                </section>
                <section className="grid-layout standard has-two-columns rightwide">
                    <div>
                        <h3>Down traditional help something natural important.</h3>
                        <p>Traverser être bois tard réduire rien. Courant envelopper larme mariage porter. Habiller
                            histoire voyage plaire résistance riche. Suivre difficile figure tempête inventer direction.
                            Vivre sang travailler imposer résistance même douleur. Séparer bientôt nation résister ne.
                            Nam quaerat facere porro id eius. Vero quam dolores recusandae. Labore odio perspiciatis
                            maiores.</p>
                        <p>Traverser être bois tard réduire rien. Courant envelopper larme mariage porter. Habiller
                            histoire voyage plaire résistance riche. Suivre difficile figure tempête inventer direction.
                            Vivre sang travailler imposer.</p>
                    </div>
                    <div className="stack-small">
                        <figure className="frame">
                            <img src={this.state.img} alt="Text"/>
                        </figure>
                        <div className="box">
                            <p>Provident maxime placeat. Quasi ut alias veniam veritatis earum. In temporibus cumque quas
                                esse architecto quod ipsam.</p>
                        </div>
                    </div>
                </section>
                <section className="grid-layout standard has-three-columns">
                    <div className="box invert">
                        <h4>Chance for someone listen bag.</h4>
                        <p>Inverted Box CSS class usage amener asseoir cruel.</p>
                    </div>
                    <div className="box">
                        <p>Box CSS class usage Vin briller attendre avoir interrompre. Écraser animer attirer lequel
                            écouter véritable couper. Accorder suivant beaux avouer heureux le charge malheur.</p>
                    </div>
                    <div className="box invert">
                        <p>Inverted Box CSS class usage</p>
                    </div>
                </section>
            </article>
        );
    }
}

export default App;