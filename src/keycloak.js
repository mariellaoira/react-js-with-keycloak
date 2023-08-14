import Keycloak from 'keycloak-js';

const keycloakConfig = {
    realm: 'master',
    clientId: 'elle-projects',
    url: 'http://4.193.163.115:8080'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;

