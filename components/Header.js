import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="border-y-4 border-green-300 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl">Decentralized Provably Random Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
