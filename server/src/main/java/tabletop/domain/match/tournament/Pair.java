package tabletop.domain.match.tournament;

public class Pair<U> {
    private U a;
    private U b;

    public Pair(U a, U b){
        this.a = a;
        this.b = b;
    }
    public U getA(){ return a; }
    public U getB(){ return b; }

    public void setA(U a){ this.a = a; }
    public void setB(U b){ this.b = b; }

    @Override
    public String toString() {
        return getA() + ", " + getB();
    }
}
