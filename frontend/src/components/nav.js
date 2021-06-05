import React from "react";
import {Link, StaticQuery, graphql} from "gatsby";
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


const Nav = () => (
    <StaticQuery
        query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
        render={(data) => (
            <div>
                <div>
                    <nav className="bg-black" data-uk-navbar>
                        <div className="text-white max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link className="font-bold text-4xl" to="/">{data.strapiGlobal.siteName}</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {data.allStrapiCategory.edges.map((category) => (
                                                <a
                                                    key={`category__${category.node.slug}`}
                                                    href={`/category/${category.node.slug}`}
                                                    className={ 'bg-gray-900 text-white uppercase'}
                                                    aria-current={category.current ? 'page' : undefined}
                                                >
                                                    {category.node.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="uk-navbar-left">*/}
                            {/*    <ul className="uk-navbar-nav">*/}
                            {/*        <li>*/}
                            {/*            <Link className="font-bold" to="/">{data.strapiGlobal.siteName}</Link>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div className="uk-navbar-right">*/}
                            {/*    <button*/}
                            {/*        className="uk-button uk-button-default uk-margin-right"*/}
                            {/*        type="button"*/}
                            {/*    >*/}
                            {/*        Categories*/}
                            {/*    </button>*/}
                            {/*    <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">*/}
                            {/*        <ul className="uk-nav uk-dropdown-nav">*/}
                            {/*            {data.allStrapiCategory.edges.map((category, i) => (*/}
                            {/*                <li key={`category__${category.node.slug}`}>*/}
                            {/*                    <Link to={`/category/${category.node.slug}`}>*/}
                            {/*                        {category.node.name}*/}
                            {/*                    </Link>*/}
                            {/*                </li>*/}
                            {/*            ))}*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </div>
            </div>
        )}
    />
);

export default Nav;
