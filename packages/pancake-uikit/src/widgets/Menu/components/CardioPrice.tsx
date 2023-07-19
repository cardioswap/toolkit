import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cardioPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CardioPrice: React.FC<Props> = ({ cardioPriceUsd }) => {
  return cardioPriceUsd ? (
    <PriceLink href="https://cardioswap.io/#/swap?inputCurrency=PLS&outputCurrency=0xE08DD1a6162A4096B4B4D3Fd3B60AE4aDe56a22f" target="_blank">
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${cardioPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CardioPrice);
