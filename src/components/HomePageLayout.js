import { graphql } from 'gatsby';
import React from 'react';
import IstLogo from '../images/ist-logo.svg';
import '../styles/homepage.css';
import '../styles/main.css';
import '../styles/markdown.css';
import Footer from './Footer';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import SectionButton, { SectionButtonLayout } from './SectionButton';
import ExternalLink from './ExternalLink';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <div className='home-page-container'>
      <Navbar />
      <div className='hero'>
        <img src={IstLogo} alt='Instituto Superior Técnico' width={150} />
        <h1>Insight For Tomorrow</h1>
        <p>Welcome to the community knowledge repository.</p>
        <p>Find everything you need throughout your journey.</p>
      </div>
      <div style={{ marginTop: 50 }}>
        {page.frontmatter.years.map(({ name, semesters }) => (
          <div className='year-section' key={name}>
            <h2>{name}</h2>
            <div>
              {semesters.map(({ name, courses }) => (
                <div className='semester-section' key={name}>
                  <h3>{name}</h3>
                  <SectionButtonLayout>
                    {courses.map(({ name, description, link, image, color, long }) => (
                      <SectionButton
                        key={link}
                        name={name}
                        description={description}
                        link={link}
                        image={image?.dataURI}
                        color={color}
                        long={long}
                      />
                    ))}
                  </SectionButtonLayout>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='content'>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query HomePageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        years {
          name
          semesters {
            name
            courses {
              color
              description
              image {
                dataURI
              }
              name
              link
              long
            }
          }
        }
      }
    }

  }
`;

export const Head = ({ data }) => {
  const { markdownRemark: page } = data;
  return <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />;
};
