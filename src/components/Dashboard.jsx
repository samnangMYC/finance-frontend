
function StatCard({ title, value, delta }) {
    return (
        <div className="p-4 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-lg text-gray-100 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="mt-2 text-2xl font-semibold">{value}</div>
            {delta && <div className="text-sm text-green-600">{delta}</div>}
        </div>
    )
}

export default function Dashboard() {
    return (
        <main className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <StatCard title="Total Revenue" value="$124,560" delta="+4.2%" />
                <StatCard title="Active Accounts" value="3,482" delta="+1.1%" />
                <StatCard title="Transactions" value="12,340" delta="-0.8%" />
                <StatCard title="New Signups" value="342" delta="+7.9%" />

            </div>

            <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="font-semibold mb-4">Revenue (last 30 days)</h2>
                    <div className="h-48 bg-gray-50 rounded flex items-center justify-center text-gray-400">Chart placeholder</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold mb-3">Recent Activity</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex justify-between"><span>Payment from ACME</span><span className="text-gray-500">$4,200</span></li>
                        <li className="flex justify-between"><span>Refund to John</span><span className="text-gray-500">-$120</span></li>
                        <li className="flex justify-between"><span>New account: Sarah</span><span className="text-gray-500">—</span></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
