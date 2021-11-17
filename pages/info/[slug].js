import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import InfoHeader from "../../components/InfoHeader";
import { infoData } from "../../data/infoData";
import styles from "../../styles/css/infopages.module.css";
import { useRouter } from "next/router";
import FloatingButton from "../../components/Home/FloatingButton";
import ProduceInfo from "../../components/InfoPages/ProduceInfo";

function Info({ pageInfoData }) {
	const [pageInfo, setPageInfo] = useState({
		title: "",
		description: "",
		description2: "",
		description3: "",
		description4: "",
		description5: "",
		imgLinks: [],
		slug: "",
	});

	const {
		title,
		description,
		description2,
		description3,
		description4,
		description5,
		imgLinks,
		slug,
	} = pageInfo;

	const router = useRouter();

	useEffect(() => {
		setPageInfo(pageInfoData[0]);
	}, [pageInfoData]);

	function showProduce() {
		if (title === "Our Produce") {
			return <ProduceInfo />;
		}
	}

	function showImage() {
		if (title === "Our Produce") {
			return (
				<img
					className={styles.info__icon}
					src="https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0="
					alt="fruits"
					style={{ width: "100%", height: "auto" }}
				/>
			);
		} else if (title === "Where We Deliver") {
			return (
				<img
					className={`${styles.info__icon} ${styles.info__icon__delivery}`}
					src="https://media.istockphoto.com/photos/we-care-for-your-safety-so-lets-keep-the-distance-picture-id1280583216?b=1&k=20&m=1280583216&s=170667a&w=0&h=w89VBynYo1VSn3OBEyJKmqmr2dc9MdyC2WW4yzNyBpw="
					alt="delivery"
				/>
			);
		} else if (title === "About Us / Our Mission") {
			return (
				<img
					className={`${styles.info__icon} ${styles.info__icon__aboutOne}`}
					src="/images/website/garwing_squat.jpeg"
					alt="founder"
				/>
			);
		} else if (title === "Our Packaging") {
			return (
				<img
					className={styles.info__icon}
					src="https://media.istockphoto.com/photos/box-package-delivery-cardboard-carton-picture-id1298116064?b=1&k=20&m=1298116064&s=170667a&w=0&h=dg7a4G08KPrxF6nSV5Siu6SOsPlU4MGAcYkXKwqD1WI="
					alt="box"
				/>
			);
		}
	}

	function showAboutUsSecondImage() {
		if (title === "About Us / Our Mission") {
			return (
				<img
					className={`${styles.info__icon} ${styles.info__icon__aboutTwo}`}
					src="/images/website/andrew_pick_produce.jpeg"
					alt="founder"
				/>
			);
		}
	}

	return (
		<Layout>
			<InfoHeader pageHeader={pageInfoData[0]} />
			<div className={styles.Info}>
				{showImage()}
				<p className="body-medium">{description}</p>
				{description2 && <p className="body-medium">{description2}</p>}
				{description3 && <p className="body-medium">{description3}</p>}
				{showAboutUsSecondImage()}
				{description4 && <p className="body-medium">{description4}</p>}
				{description5 && <p className="body-medium">{description5}</p>}
				{showProduce()}
			</div>
			<FloatingButton />
			{/* <AnimationStrip /> */}
			{/* <style jsx>{dynamiccss}</style> */}
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = infoData.map((info) => {
		return { params: { slug: info.slug } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params.slug;

	const pageInfoData = infoData.filter((info) => info.slug === slug);

	return {
		props: { pageInfoData },
	};
}

export default Info;
