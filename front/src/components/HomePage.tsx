function HomePage() {
    return (
        <div id="background">
            <div>
                <h1>Le vieux port de Marseille</h1>
                <h3>Since 600BC !</h3>
            </div>
            <div className={"infos"}>
                <p>
                    Le Vieux-Port de Marseille, véritable cœur historique de la cité phocéenne, est un lieu chargé
                    d'histoire et d'authenticité. Depuis sa fondation par les Phocéens en 600 avant J.-C., ce port
                    naturel a toujours été un point névralgique de la ville, témoignant des échanges commerciaux et
                    culturels entre la Méditerranée et l'Europe. Enserré par les forts Saint-Jean et Saint-Nicolas, le
                    Vieux-Port offre une vue imprenable sur la mer, où se mêlent bateaux de pêche traditionnels et
                    yachts modernes. Ce lieu emblématique est également le point de départ idéal pour explorer les
                    célèbres calanques et les îles du Frioul, rendant hommage à la richesse maritime de Marseille. Le
                    matin, le marché aux poissons, situé à l'extrémité du port, attire les habitants et les visiteurs à
                    la recherche de poissons frais, pêchés la nuit précédente par les pêcheurs locaux.
                </p>
                <p>
                    Aujourd'hui, le Vieux-Port est un espace vivant et animé, où se rencontrent tradition et modernité.
                    La réhabilitation récente du port, menée par l'architecte Norman Foster, a transformé cette place
                    historique en une esplanade piétonne agréable et accueillante, tout en préservant son charme
                    d'antan. Les terrasses des cafés et des restaurants offrent une ambiance conviviale et festive,
                    parfaite pour déguster une bouillabaisse ou un pastis en admirant le coucher de soleil. L'esplanade
                    du Mucem, située à proximité, propose des expositions et des événements culturels qui attirent un
                    large public. En somme, le Vieux-Port de Marseille est bien plus qu'un simple port : c'est le cœur
                    battant de la ville, un lieu où le passé et le présent se rencontrent harmonieusement, offrant aux
                    visiteurs un aperçu authentique de l'âme marseillaise.
                </p>
            </div>
            <div id="gif">
                <img src={"https://img1.picmix.com/output/pic/normal/4/5/7/0/3350754_e813c.gif"} alt={"Vieux-Port"}
                     width={"250px"} height={"250px"}/>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoLMXYKD1-k4L-zAhDn4lCLKLvDMb5aouigNLp9OHyerZdToSADOpDBy2e_ck1U-BoCM&usqp=CAU"}
                    alt={"Vieux-Port"} width={"250px"} height={"250px"}/>
            </div>
        </div>
    );
}

export default HomePage;