import React from "react";
import { Row } from "antd";
import StatCard from "../../StatCard";
import CountUp from "../../../Banner/CountUp";
import "./index.less";

function Item({ }) {
    return (
        <section className="home__section">
            <Row>
                <div className="home__stat-card ">
                    <StatCard from={50} to={80}
                        label="Menos custo de desenvolvimento"
                        note="Medido em projetos de clientes."
                    />
                    <StatCard from={70} to={90}
                        label="Mais rápido a criar backoffice"
                        note="Do formulário ao CRUD completo."
                    />
                    <div className="home__count-card">
                        <div className="home__count-value">
                            <CountUp to={6} />
                        </div>
                        <p className="home__count-label">Linguagens no servidor</p>
                        <p className="home__count-note">JS, Kotlin, Groovy, Python, Ruby, Java.</p>
                    </div>
                    <div className="home__count-card">
                        <div className="home__count-value">
                            <CountUp to={5} />
                        </div>
                        <p className="home__count-label">Bases de dados suportadas</p>
                        <p className="home__count-note">MariaDB, PostgreSQL, SQL Server, H2, CockroachDB.</p>
                    </div>
                </div>
            </Row>
        </section>
    );
}
export default Item;