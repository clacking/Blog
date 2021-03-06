import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { css } from '@emotion/core'
import { withPrefix } from 'gatsby'

// basically HTML
export default function AboutMe() {
    const icon = css`
        height: 200px;
        width: 200px;
        border: 1px solid;
        margin: 0;
    `

    return (
        <Layout title={'About me'}>
            <SEO title={'About me'} />
            <div css={css`text-align: center;`}>
                <img alt="my logo" css={icon} src={"https://avatars2.githubusercontent.com/u/37972714?s=460&v=4"} />
                <p>Name: Toya KINOSHITA</p>
                <p>Current: University student.</p>
                <p>I'm interested in programming especially software and Web.</p>
                <p>And I like geeky/nerdly techs 😜.</p>
                <h3>Links/Contacts</h3>
                <p>Twitter: <a href="https://twitter.com/comfykb">@comfykb</a></p>
                <p>Github: <a href="https://github.com/clacking">clacking</a>, Gitlab: <a href="https://gitlab.com/clacking">clacking</a></p>
                <p>Email: click[at]clacking.net (alt. comfykeyboard[at]gmail.com) [<a href="https://keybase.io/clacking/pgp_keys.asc">PGP</a>]</p>
                <p>Keybase: <a href="https://keybase.io/clacking">clacking</a></p>
                <p>Discord: clacking#1396 (Note: NOT Primary account, please contact on twitter first if you needed.)</p>
                <h3>Programming</h3>
                <h4>Language</h4>
                <p>Javascript, TypeScript, C++, Rust</p>
                <p>PHP, Python, Ruby</p>
                <h4>Framework, Libs, other</h4>
                <p>Express.js, Nest.js</p>
                <p>React, Vue.js</p>
                <h3>Hobbies</h3>
                <p>Car, Motorsports, <Link to={'/archive/kb'}>Mechanical Keyboards</Link>, Sneakers and some tech things.</p>
                <h3>Archives</h3>
                <p><Link to={'/archive/uni'}>IoT + home automation system Project at university...</Link></p>
                <h3>Desktop</h3>
                <img src={withPrefix('files/desktop.png')} alt={'Desktop'} />
                <p>OS/Distro: Arch Linux (Antergos repository removed)</p>
                <p>^ purged :(</p>
                <img src={withPrefix('files/desktop2.png')} />
                <p>nothing special.</p>
            </div>
        </Layout>
    )
}
