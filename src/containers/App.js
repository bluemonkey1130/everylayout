import React, {Component, Fragment} from 'react';
import Header from "../components/Header/Header";
import Grid from "../components/every-layout/Grid/Grid";
import Box from "../components/every-layout/Box/Box";
import Stack from "../components/every-layout/Stack/Stack";
import Reel from "../components/every-layout/Reel/Reel";
import Center from "../components/every-layout/Center/Center";
import Cover from "../components/every-layout/Cover/Cover";
import Frame from "../components/every-layout/Frame/Frame";
import Sidebar from "../components/every-layout/Sidebar/Sidebar";
import Switcher from "../components/every-layout/Switcher/Switcher";
import Cluster from "../components/every-layout/Cluster/Cluster";


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
                <grid-l min="250px" space="var(--s1)">
                </grid-l>


                <article className="grid-row">
                    <section className="grid align-full">
                        <cover-l minHeight="100vh" centered="center-l">
                            <center-l andText>
                                <stack-l space="0rem">
                                    <h1>{this.state.reallyShortText}</h1>
                                    <p>{this.state.shortText}</p>
                                </stack-l>
                            </center-l>
                        </cover-l>
                    </section>
                    <section className="grid">
                        <stack-l className="align-center">
                            <frame-l ratio="16:9">
                                <img src={this.state.img} alt="Text"/>
                            </frame-l>
                            <center-l andText>
                                <h2>{this.state.shortText}</h2>
                                <p>{this.state.longText}</p>
                                <a href="#" className="button call-to-action right">Read More</a>
                            </center-l>
                        </stack-l>
                    </section>
                    <section className="grid">
                        <switcher-l>
                            <div>
                                <div>
                                    <frame-l ratio="1:1">
                                        <img src={this.state.img} alt="Text"/>
                                    </frame-l>
                                </div>
                                <div>
                                    <frame-l ratio="1:1">
                                        <img src={this.state.img} alt="Text"/>
                                    </frame-l>
                                </div>
                                <div>
                                    <frame-l ratio="1:1">
                                        <img src={this.state.img} alt="Text"/>
                                    </frame-l>
                                </div>
                            </div>
                        </switcher-l>
                    </section>
                    <section className="grid">
                        <div>
                            <h3>{this.state.shortText}</h3>
                            <p>{this.state.longText}</p>
                            <p>{this.state.longText}</p>
                        </div>
                        <box-l>
                            <stack-l space="1.5rem">
                                <h4>{this.state.reallyShortText}</h4>
                                <p>{this.state.text}.</p>
                                <stack-l space="0.5rem">
                                    <label>Name</label>
                                    <input type="text"/>
                                </stack-l>
                                <stack-l space="0.5rem" splitAfter={3}>
                                    <label>Email*</label>
                                    <input type="email"/>
                                    <p>*please enter a valid email address</p>
                                    <input className="button" type="submit" value="Submit"/>
                                </stack-l>
                            </stack-l>
                        </box-l>
                    </section>
                    <section className="grid align-full">
                        <reel-l itemWidth="400px">
                            <stack-l>
                                <img src={this.state.img} alt="Text"/>
                            </stack-l>
                            <stack-l>
                                <img src={this.state.img} alt="Text"/>
                            </stack-l>
                            <stack-l>
                                <img src={this.state.img} alt="Text"/>
                            </stack-l>
                            <stack-l>
                                <img src={this.state.img} alt="Text"/>
                            </stack-l>
                            <stack-l>
                                <img src={this.state.img} alt="Text"/>
                            </stack-l>
                        </reel-l>
                    </section>
                    <section className="grid-layout has-two-columns right-wide">
                        <box-l>
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.text}</p>
                        </box-l>
                        <box-l className="invert">
                            <h4>{this.state.shortText}</h4>
                            <p>{this.state.longText}</p>
                        </box-l>
                    </section>
                    <section className="grid">
                        <div>
                            <h4>{this.state.reallyShortText}</h4>
                            <p>{this.state.longText}.</p>
                        </div>
                        <stack-l>
                            <frame-l>
                                <img src={this.state.img} alt="Text"/>
                            </frame-l>
                            <box-l>
                                <stack-l space="2rem">
                                    <stack-l space="1rem">
                                        <h4>Sign up</h4>
                                        <p>{this.state.text}</p>
                                    </stack-l>
                                    <sidebar-l space="var(--s2)" side="right" sideWidth="5ch">
                                        <div>
                                            <div>
                                                <label>Email*</label>
                                                <input type="text"/>
                                            </div>
                                            <input className="button right" type="submit" value="Submit"/>
                                        </div>
                                    </sidebar-l>
                                </stack-l>
                            </box-l>
                        </stack-l>
                    </section>
                </article>
            </Fragment>
        );
    }
}

export default App;