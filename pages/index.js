import Head from "next/head";
// import Image from 'next/image'
// import "../styles/Home.module.css";
import Layout from "../components/Layout";
import Banner from "../components/Home/Banner";
import Banner2 from "../components/Home/Banner2";
import BenefitsStrip from "../components/Home/BenefitsStrip";
import Membership from "../components/Home/Membership";
import AnimationStrip from "../components/Home/AnimationStrip";
import SourcingStrip from "../components/Home/SourcingStrip";
import ProblemStrip from "../components/Home/ProblemStrip";
import SolutionStrip from "../components/Home/SolutionStrip";
import CustomerReviewStrip from "../components/Home/CustomerReviewStrip";
import ExploreStrip from "../components/Home/ExploreStrip";
import SubscribeStrip from "../components/Home/SubscribeStrip";
import FloatingButton from "../components/Home/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div id="root">
				<Script
					src="https://kit.fontawesome.com/8b4571ee68.js"
					crossOrigin="anonymous"
					strategy="beforeInteractive"
				></Script>
				<div id="main" className="sc-gbzWSY ejDqyh">
					{/* <Banner /> */}
					<Banner2 />
					{/* <Link href="/testdata">
						<a>test data</a>
					</Link>
					<Link href="/info/about-us">
						<a>About data</a>
					</Link>
					<Link href="/produce">
						<a>Shop Produce</a>
					</Link> */}
					<BenefitsStrip />
					<Membership />
					{/* <AnimationStrip /> */}
					<SourcingStrip />
					<ProblemStrip />
					<SolutionStrip />
					{/* <CustomerReviewStrip /> */}
					{/* <ExploreStrip /> */}
					<SubscribeStrip />
					<FloatingButton />
					{/* <script type="application/ld+json">
				{
					"@context"= "https://schema.org/",
					"@type"= "Organization",
					"name"= "Misfits Market",
					"url"= "https://www.misfitsmarket.com",
					"logo"= "https://static.misfitsmarket.com/images/MM_nav-logo.svg"
				}
			</script>  */}
				</div>
			</div>
		</Layout>
	);
}
