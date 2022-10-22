import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Decentralized Provably Random Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
