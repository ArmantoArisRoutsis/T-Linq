import { useState } from "react";
import { Button, Container, FormGroup, FormInput } from "shards-react";
import { Layout } from "../../components/layout";
import Title from "../../components/title";
import MainVideoLayout from "../../components/VideoLayout/MainVideoLayout"
import styles from '../../styles/Video.module.css'

export default function liveVideo() {

    return (
        <Layout>
                <MainVideoLayout></MainVideoLayout>
        </Layout>
    )
}
