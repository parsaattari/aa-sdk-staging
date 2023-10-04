import Portal, { PortalOptions } from '@portal-hq/web'
import { createWalletClient, custom } from "viem";
import {
  WalletClientSigner, type SmartAccountSigner 
} from "@alchemy/aa-core";


const portalOptions = {
  autoApprove: true,
  gatewayConfig: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
  chainId: 80001,
  host: process.env.PORTAL_WEB_HOST,
} as PortalOptions 

const portal = new Portal(portalOptions)

const portalWalletClient = createWalletClient({
   transport: custom(portal.provider),
});
export const portalSigner: SmartAccountSigner = new WalletClientSigner(
   portalWalletClient
);
