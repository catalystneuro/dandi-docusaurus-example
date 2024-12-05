import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import teamData from "@site/data/team_members.json";
import styles from "./styles.module.css";

interface TeamMember {
    name: string;
    photo: string;
    info: string;
    email: string;
    number_educ: number;
    education1?: string;
    education2?: string;
    education3?: string;
    education4?: string;
}

const Team: React.FC = () => {
    return (
        <div className={styles.teamContainer}>
            {teamData.map((member: TeamMember, index: number) => (
                <div key={index} className={styles.memberCard}>
                    <img
                        src={useBaseUrl(member.photo)} // Dynamically prepend base URL
                        alt={`Photo of ${member.name}`}
                        className={styles.memberPhoto}
                    />
                    <h3>{member.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: member.info }} />
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                    <div>
                        <h4>Education</h4>
                        <ul>
                            {Array.from({ length: member.number_educ }, (_, i) => {
                                const educationField = `education${i + 1}` as keyof TeamMember;
                                return (
                                    member[educationField] && (
                                        <li
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: member[educationField] as string,
                                            }}
                                        />
                                    )
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
