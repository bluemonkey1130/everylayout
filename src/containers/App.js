import React, {Component, Fragment} from 'react';
import Header from "../components/Header/Header";


class App extends Component {
    state = {
        header: {
            width: '',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            reallyShortText: 'Radio buy raise speak.',
            shortText: 'More such food reveal ok improve similar.',


        },
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        reallyLongText: 'Skin base work seat now stay than. Successful itself interest radio economy maybe around. Agent explain lawyer film daughter. Green direction down ever. Remember seat imagine. Else case law. Far long indicate suggest police dream main. Travel hold explain lead into. Fight certainly case popular bank cup type. Enim ut sapiente voluptates distinctio nam minima. Ab mollitia non cupiditate. Quasi consequatur rerum eius ea officia Employer longtemps immense examiner. Permettre dos jeune puissant durant étouffer. Envoyer goût secrétaire céder. Ipsum deleniti omnis quae est saepe perspiciatis. Fugiat tempore voluptas ab. Ea quis aspernatur laboriosam in. Recevoir éclat fatiguer note envie. Midi tempête quatre expérience société taire. Posséder accord arracher pluie. Autorité vieux fin. Celui éprouver sueur ennemi poète marché. Depuis rose réponse me maître engager. Libero sit maiores delectus. Ullam non quaerat. Ipsum accusantium expedita atque alias recusandae. Commodi esse tempore veritatis quaerat assumenda. Assumenda harum dicta officiis commodi quas unde illum. Quod vero ullam dignissimos harum voluptates.',
        longText: 'Puis contre forme fait avancer absolu lumière. Semblable accent sourire agiter parti. Ci ouvrir savoir plonger santé caractère simple. Totam voluptatem voluptates ducimus. Debitis et in ipsa. Officia ullam soluta architecto eveniet neque repellat. Hic fuga ab repudiandae. Occaecati laudantium dicta occaecati error deserunt fugit ullam. Laudantium vero.',
        text: 'Relationship night by dog compare fight. Store our arm manage. Particular firm animal stock color appear. Maiores nemo nostrum. Recusandae esse consectetur aliquam soluta necessitatibus accusamus. Nobis perferendis alias quisquam.',
        shortText: 'More such food reveal ok improve similar.',
        reallyShortText: 'Radio buy raise speak.',
    }

    render() {
        return (
            <Fragment>
                <Header content={this.state.header}/>
                <article className="grid-row">
                    <section className="grid">
                        <div className="cover">
                            <h1 className="align-center">{this.state.reallyShortText}</h1>
                            <p className="align-center">{this.state.shortText}</p>
                        </div>
                    </section>
                    <section className="grid">
                        <div className="stack align-center">
                            <figure className="frame">
                                <img src={this.state.img} alt="Text"/>
                            </figure>
                            <div className="center-l max-width:measure*2">
                                <h2>{this.state.shortText}</h2>
                                <p>{this.state.longText}</p>
                                <a href="#" className="button call-to-action right">Read More</a>
                            </div>
                        </div>
                    </section>
                    <section className="grid align-full grid-gap-900">
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
                    <section className="grid">
                        <div>
                            <h3>{this.state.shortText}</h3>
                            <p>{this.state.longText}</p>
                            <p>{this.state.longText}</p>
                        </div>
                        <form className="stack stack-large">
                            <div className="box">
                                <div className="stack stack-small">
                                    <h4>{this.state.reallyShortText}</h4>
                                    <p>{this.state.text}.</p>
                                </div>
                                <div className="stack stack-small">
                                    <label>Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="stack stack-small">
                                    <label>Email*</label>
                                    <input type="email"/>
                                    <p>*please enter a valid email address</p>
                                    <input className="button right" type="submit" value="Submit"/>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="grid">
                        <div className="stack stack-small">
                            <figure className="frame">
                                <img src={this.state.img} alt="Text"/>
                            </figure>
                            <p>{this.state.shortText}</p>
                        </div>
                        <div>
                            <h3>{this.state.shortText}</h3>
                            <p>{this.state.longText}.</p>
                            <p>{this.state.text}</p>
                        </div>
                    </section>
                    <section className="grid">
                        <div className="reel">
                            <img src={this.state.img} alt="Text"/>
                            <img src={this.state.img} alt="Text"/>
                            <img src={this.state.img} alt="Text"/>
                            <img src={this.state.img} alt="Text"/>
                            <img src={this.state.img} alt="Text"/>
                        </div>
                    </section>
                    <section className="grid-layout has-two-columns right-wide">
                        <div className="box">
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.text}</p>
                        </div>
                        <div className="box invert">
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.longText}</p>
                        </div>
                    </section>
                    <section className="grid">
                        <div>
                            <h3>{this.state.shortText}</h3>
                            <h5>{this.state.shortText}</h5>
                            <p>{this.state.reallyLongText}</p>
                        </div>
                        <div className="stack">
                            <figure className="frame">
                                <img src={this.state.img} alt="Text"/>
                                <h3 className="align-center weight-bold color-tertiary">{this.state.shortText}</h3>
                            </figure>
                            <div className="stack stack-small box">
                                <div>
                                    <h4>Sign up</h4>
                                    <p>{this.state.shortText}</p>
                                </div>
                                <div className="with-sidebar">
                                    <div>
                                        <input type="text"/>
                                        <input className="button right" type="submit" value="Submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid">
                        <div><p>{this.state.text}</p></div>
                        <div><p>{this.state.text}</p></div>
                    </section>
                    <section className="grid">
                        <div className="reel">
                            <div className="box invert">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box invert">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box invert">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box invert">
                                <div className="stack">
                                    <div className="frame">
                                        <img src={this.state.img} alt="Text"/>
                                    </div>
                                    <div>
                                        <h4>{this.state.reallyShortText}</h4>
                                        <p>{this.state.shortText}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid">
                        <div className="switcher">
                            <div>
                                <div><p>{this.state.text}</p></div>
                                <div><p>{this.state.text}</p></div>
                                <div><p>{this.state.text}</p></div>
                            </div>
                        </div>
                    </section>
                </article>
            </Fragment>
        );
    }
}

export default App;