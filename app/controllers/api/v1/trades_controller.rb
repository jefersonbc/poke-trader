module Api
    module V1
        class TradesController < ApplicationController
            # protect_from_forgery with: :null_session

            def index
                trades = Trade.all
                render json: TradeSerializer.new(trades).serialized_json
            end

            def create
                @trade = Trade.new(trade_params)
            
                respond_to do |format|
                  if @trade.save
                    format.json { render json: { status: "Trade Created" }, status: :created }
                  else
                    format.json { render json: @trade.errors, status: :unprocessable_entity }
                  end
                end
              end
            
              private
                def trade_params
                  params.require(:trade).permit(:is_fair, :player_one_id, :player_two_id, :trade_items_attributes => [:player_id, :pokemon_id])
              end
        end
    end
end