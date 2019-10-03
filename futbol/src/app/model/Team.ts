export interface Team {
    id: number;
    name: string;
    location: string;
    stadium: string;
    logo: string;
    games_played: number;
    games_won: number;
    games_tied: number;
    games_lost: number; 
    goals_in_favor: number;
    goals_against: number;
    goal_difference: number;
    points: number;
    position: number;
}