import React, { FC } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { color } from "styled-system";

const StyledLink = styled.a`
  ${color}

  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
`;

export interface Props {
  to: string;
  color?: string;
}

export const Link: FC<Props> = ({ to, ...parentProps }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  const props = {
    color: "primary",
    ...parentProps,
  };

  if (isInternal) {
    return (
      <StyledLink {...props} to={to} as={GatsbyLink} activeClassName="active" />
    );
  }

  return (
    <StyledLink
      {...props}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};
