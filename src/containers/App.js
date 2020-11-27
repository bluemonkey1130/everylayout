import React, {Component, Fragment} from 'react';


class App extends Component {
    state = {
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        reallyLongText: 'Skin base work seat now stay than. Successful itself interest radio economy maybe around. Agent explain lawyer film daughter. Green direction down ever. Remember seat imagine. Else case law. Far long indicate suggest police dream main. Travel hold explain lead into. Fight certainly case popular bank cup type. Enim ut sapiente voluptates distinctio nam minima. Ab mollitia non cupiditate. Quasi consequatur rerum eius ea officia Employer longtemps immense examiner. Permettre dos jeune puissant durant étouffer. Envoyer goût secrétaire céder. Ipsum deleniti omnis quae est saepe perspiciatis. Fugiat tempore voluptas ab. Ea quis aspernatur laboriosam in. Recevoir éclat fatiguer note envie. Midi tempête quatre expérience société taire. Posséder accord arracher pluie. Autorité vieux fin. Celui éprouver sueur ennemi poète marché. Depuis rose réponse me maître engager. Libero sit maiores delectus. Ullam non quaerat. Ipsum accusantium expedita atque alias recusandae. Commodi esse tempore veritatis quaerat assumenda. Assumenda harum dicta officiis commodi quas unde illum. Quod vero ullam dignissimos harum voluptates.',
        longText: 'Puis contre forme fait avancer absolu lumière. Semblable accent sourire agiter parti. Ci ouvrir savoir plonger santé caractère simple. Totam voluptatem voluptates ducimus. Debitis et in ipsa. Officia ullam soluta architecto eveniet neque repellat.',
        shortText: 'More such food reveal ok improve similar.',
        text: 'Relationship night by dog compare fight. Store our arm manage. Particular firm animal stock color appear.'
    }

    render() {
        return (
            <Fragment>
                <header id="header" className="grid-row">
                    <div className="grid-layout alignwide has-one-column">
                        <div className="cluster">
                            <img className="logo" src={this.state.img} alt="Text"/>
                            <nav className="cluster">
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <article className="grid-row">
                    <section className="grid-layout alignwide has-one-column">
                        <div className="stack align-center">
                            <figure className="frame">
                                <img src={this.state.img} alt="Text"/>
                            </figure>
                            <div className="center-l center-large">
                                <h2>{this.state.shortText}</h2>
                                <p>{this.state.longText}</p>
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
                    <section className="grid-layout standard has-one-column">
                        <form className="stack stack-large center-l">
                            <div className="stack stack-small align-center">
                                <h3>{this.state.shortText}</h3>
                                <p>{this.state.longText}.</p>
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
                    <section className="grid-layout standard has-two-columns leftwide">
                        <div>
                            <h3>{this.state.shortText}</h3>
                            <p>{this.state.longText}.</p>
                            <p>{this.state.text}</p>
                        </div>
                        <div className="stack-small">
                            <figure className="frame">
                                <img src={this.state.img} alt="Text"/>
                            </figure>
                            <p>{this.state.text}</p>
                        </div>
                    </section>
                    <section className="grid-layout standard has-two-columns rightwide">
                        <figure className="frame">
                            <img src={this.state.img} alt="Text"/>
                        </figure>
                        <div>
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.reallyLongText}</p>
                        </div>
                    </section>
                    <section className="grid-layout standard has-two-columns rightwide">
                        <div className="box">
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.text}</p>
                        </div>
                        <div className="box invert">
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.longText}</p>
                        </div>
                    </section>
                </article>
            </Fragment>
        );
    }
}

export default App;